reinitialize
set auto_zoom, off
set orthoscopic, off

# Background (deep blue)
set bg_rgb, [0.02, 0.08, 0.20]

# Show all models/states simultaneously (NMR ensembles etc.)
set all_states, on

# A clean "starfield" look
hide everything, all
set cartoon_fancy_helices, 1
set cartoon_smooth_loops, 1
set cartoon_sampling, 12
set depth_cue, 0
set fog, 0
set antialias, 2
set ambient, 0.55
set direct, 0.65
set specular, 0.2
set shininess, 10

python
import json, math, random, urllib.request
from pymol import cmd

# ---- Parameters you will tweak ----
N = 120            # number of random structures
SEED = 7           # reproducible randomness
RADIUS = 220.0     # scatter radius
FRAMES = 240       # output frames (loop length)
# -----------------------------------

rng = random.Random(SEED)

HOLDINGS = "https://data.rcsb.org/rest/v1/holdings/current/entry_ids"

def http_get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent":"pymol-galaxy/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))

def random_unit_vector():
    z = rng.uniform(-1.0, 1.0)
    t = rng.uniform(0.0, 2.0*math.pi)
    r = math.sqrt(max(0.0, 1.0 - z*z))
    return (r*math.cos(t), r*math.sin(t), z)

def point_in_sphere(radius):
    ux, uy, uz = random_unit_vector()
    rr = radius * (rng.random() ** (1.0/3.0))
    return (ux*rr, uy*rr, uz*rr)

# Get current PDB IDs and sample
ids = http_get_json(HOLDINGS)
rng.shuffle(ids)
picked = [str(x).lower() for x in ids[:N]]

cmd.set("fetch_path", ".")  # where fetched files are cached/saved

loaded = []
for i, pid in enumerate(picked, start=1):
    obj = f"p{i:03d}_{pid}"
    try:
        # fetch() supports lists too, but per-object makes naming/scattering simple
        cmd.fetch(pid, name=obj, type="cif", async_=0, zoom=0)  # mmCIF via fetch :contentReference[oaicite:2]{index=2}
        cmd.remove(f"{obj} and solvent")
        cmd.remove(f"{obj} and resn HOH")
        cmd.show("cartoon", obj)
        cmd.color("grey90", obj)

        # Random transform
        tx, ty, tz = point_in_sphere(RADIUS)
        ax, ay, az = random_unit_vector()
        ang = rng.uniform(0.0, 360.0)
        sc  = rng.uniform(0.45, 1.35)

        cmd.scale(sc, obj)
        cmd.translate([tx, ty, tz], object=obj)
        cmd.rotate([ax, ay, az], ang, object=obj)
        loaded.append(obj)
    except Exception as e:
        print(f"[WARN] fetch failed for {pid}: {e}")

if loaded:
    cmd.center("all")
    cmd.zoom("all", buffer=20)

# Build frames and encode a smooth looping camera motion
cmd.mset(f"1 x{FRAMES}")
for f in range(1, FRAMES+1):
    cmd.frame(f)
    cmd.turn("y", 360.0/FRAMES)  # full revolution over movie
    cmd.turn("x", 12.0/FRAMES)   # slight tilt

python end

# Export frames
set ray_trace_frames, 0
set cache_frames, 0
mpng frame, 1, 0


