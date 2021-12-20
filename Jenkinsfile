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
                sh 'npm run test'
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
                sh 'sonar-scanner -Dsonar.login=85398a188d152e13c7b9c37b45d3d85689dd2175 -Dsonar.host.url=http://172.17.0.1:9000'
            }
        }
    }
}