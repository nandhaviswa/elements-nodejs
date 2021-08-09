pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                input 'shall I build?'
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