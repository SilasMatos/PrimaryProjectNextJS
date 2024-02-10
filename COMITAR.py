import subprocess

def automaticCommit():


    subprocess.run(["git", "add", "."])

    commit_message = "Alteracao na section 22"
    subprocess.run(["git", "commit", "-m", commit_message])

    subprocess.run(["git", "push", "origin", "master"])

    print("Commit realizado com sucesso!!")

if __name__ == "__main__":
 automaticCommit()
