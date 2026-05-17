pipeline {
    agent any
    stages {
        stage('1. Checkout') {
            steps {
                // 깃허브에서 코드를 가져옵니다.
                checkout scm
            }
        }
        stage('2. E2E Test (Selenium)') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'node tests/e2e.test.js'
                }
            }
        }
        stage('3. Docker Build & ECR Push') {
            steps {
                // ECR 로그인 및 이미지 푸시 로직 (사전 설정 필요)
                sh 'docker build -t wysiwyg-frontend ./frontend'
                sh 'docker build -t wysiwyg-backend ./backend'
            }
        }
        stage('4. K8s Deploy (Minikube)') {
            steps {
                // 쿠버네티스에 새로운 이미지 적용
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}