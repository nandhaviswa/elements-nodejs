pipeline {
    agent none
    stages {
        stage('Checklist') {
            agent {
                docker { 
                    image 'node:16' 
                }
            }
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'pwd'
                sh 'ls -larth'
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Sonarqube coverage results') {
            agent {
                docker { 
                    image 'sonarsource/sonar-scanner-cli'
                }
            }
            steps {
                echo 'Building..'
                sh 'ls -la'
                sh 'ls -ld coverage/*'
                sh 'sonar-scanner -Dsonar.login=1fdcfdc830765535e65bd617b909aeec5c8592c5 -Dsonar.host.url=http://172.17.0.1:9000'
            }
        }
    }
}