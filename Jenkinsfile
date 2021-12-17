pipeline {
    agent {
        docker { image 'node:16' }
    }

    stages {
        stage('Check node version') {
            steps {
                sh 'node --version'
            }
        }
        stage('Build') {
            steps {
                input 'Shall I proceed or not?'
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