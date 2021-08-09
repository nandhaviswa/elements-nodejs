pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                input {
                    message 'Shall I proceed or not?'
                }
                echo 'Building..'
                sh 'docker image ls'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}