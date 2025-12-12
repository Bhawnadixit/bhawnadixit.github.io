python
import os
import requests
import random
from pymol import cmd

print("Fetching list of all valid PDB IDs from RCSB...")
url = "https://data.rcsb.org/rest/v1/holdings/current/entry_ids"

pdb_ids = requests.get(url).json()
print(f"Total PDB structures found: {len(pdb_ids)}")

# Select 100 random valid PDB IDs
num = 100
selected = random.sample(pdb_ids, num)

print(f"Selected {num} random IDs: {selected}")

# Download each structure
for pid in selected:
    print(f"Downloading {pid} ...")
    path = os.path.join(os.getcwd(), f"proteins\\{pid}.pdb")
    try:
        cmd.fetch(pid, async_=0)   # NOTE: async_ with underscore
        
        cmd.cd("pdbs_rand")
        cmd.save(f"{pid}.pdb", pid)
        print(f"Saved {pid}.pdb")
    except Exception as e:
        print(f"Failed to fetch {pid}: {e}")

print("\nDONE — 100 random PDB structures downloaded.")
python end
