import subprocess

def simulate_git_commit_push():


    subprocess.run(["git", "add", "."])

    commit_message = "Alteracao na section"
    subprocess.run(["git", "commit", "-m", commit_message])

    subprocess.run(["git", "push", "origin", "master"])

    print("Commit realizado com sucesso!!")

if __name__ == "__main__":
    simulate_git_commit_push()
