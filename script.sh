#!/bin/bash

# Configuration
# -----------------------------------------------------------------------------
REPO_PORTFOLIO="https://github.com/huugooo06/Portfolio.git"
REPO_BETS="https://github.com/huugooo06/cordoba-bets.git"
REPO_FITAI="https://github.com/huugooo06/FITAI.git"
REPO_AXIS="https://github.com/hugooocc/landingpage-axis.git"
REPO_TR2="https://github.com/inspedralbes/tr2-24-25-front-back-damtr2g6.git"
REPO_VOICE="https://github.com/hugooocc/VOICECONTROLLER.git"
REPO_CHATBOT="https://github.com/hugooocc/chatbot-ia-con-node.git"

# Detect OS and set BASE_DIR accordingly
# If running in Git Bash on Windows, /c/Users/User is typical home
# If running on Linux VPS, /home/user is typical
# We default to the user's requested structure referencing $USER
BASE_DIR="/home/$USER"
# Fallback if /home/$USER doesn't exist (e.g. typical Windows environment)
if [ ! -d "$BASE_DIR" ]; then
    BASE_DIR="$HOME"
fi

PROJECTS_DIR="$BASE_DIR/PROYECTOS"

# 1. Create directory structure
# -----------------------------------------------------------------------------
echo "Creating directories in $BASE_DIR..."
mkdir -p "$PROJECTS_DIR"

# 2. Clone Portfolio
# -----------------------------------------------------------------------------
cd "$BASE_DIR" || exit
if [ -d "Portfolio" ]; then
    echo "Portfolio already exists. Pulling latest changes..."
    cd Portfolio
    git pull
else
    echo "Cloning Portfolio..."
    git clone "$REPO_PORTFOLIO" Portfolio
fi

# 3. Clone Projects
# -----------------------------------------------------------------------------
cd "$PROJECTS_DIR" || exit

clone_or_pull() {
    local repo_url=$1
    local dir_name=$2

    if [ -d "$dir_name" ]; then
        echo "Updating $dir_name..."
        cd "$dir_name"
        git pull
        cd ..
    else
        echo "Cloning $dir_name..."
        git clone "$repo_url" "$dir_name"
    fi
}

clone_or_pull "$REPO_BETS" "CORDOBA-BETS"
clone_or_pull "$REPO_FITAI" "FITAI"
clone_or_pull "$REPO_AXIS" "landingpage-axis"
clone_or_pull "$REPO_TR2" "tr2-24-25-front-back-damtr2g6"
clone_or_pull "$REPO_VOICE" "VOICECONTROLLER"
clone_or_pull "$REPO_CHATBOT" "chatbot-ia-con-node"

# 4. Deploy with Docker Compose
# -----------------------------------------------------------------------------
echo "Starting deployment with Docker Compose..."
cd "$BASE_DIR/Portfolio" || exit

# Stop existing containers to ensure clean restart
echo "Stopping containers..."
docker compose down

# Build and start in detached mode
echo "Building and starting..."
docker compose up --build -d

echo "Deployment finished! Visit your server IP/Domain to check."
