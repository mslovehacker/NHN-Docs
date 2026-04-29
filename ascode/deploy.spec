version: 0.1
tasks:
  - type: binary
    user: irteam
    targetDir: /home1/irteam/deploy/toast-documents
    binaryVariableAs: binary
  - type: command
    name: after install
    command: |
      cd /home1/irteam/deploy/toast-documents
      rm -rf ./temp
      mkdir -p ./temp
      unzip app.zip -d ./temp
      BINARY_GROUP=$(find temp/ -maxdepth 1 | tail -n 1 | awk -F '/' '{print $2}')
      mv ${BINARY_GROUP} backup_$${timestamp}
      mv temp/${BINARY_GROUP} ./
      rm app.zip
      rm -rf backup_*
    user: irteam
