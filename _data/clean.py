import os

def repair_titles_yml(file_path):
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    fixed_lines = []
    
    for line in lines:
        stripped = line.lstrip() # Remove spaces from the left side
        
        # 1. Skip empty lines or keep comments at the margin
        if not stripped or stripped.startswith("#"):
            fixed_lines.append(line.strip() + "\n")
            
        # 2. If it's a URL (starts with http), force it to the far left
        elif stripped.startswith("http"):
            fixed_lines.append(stripped.strip() + "\n")
            
        # 3. If it's title or description, give it exactly 2 spaces
        elif stripped.startswith("title:") or stripped.startswith("description:"):
            fixed_lines.append("  " + stripped.strip() + "\n")
            
        # 4. For any other sub-properties, maintain 2-space indentation
        else:
            fixed_lines.append("  " + stripped.strip() + "\n")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)
    
    print("Success: titles.yml layout has been fixed and aligned!")

if __name__ == "__main__":
    repair_titles_yml('titles.yml')