provider "aws" {
  region = "ap-northeast-2"
}

# AWS S3 버킷 생성 (이미지 업로드용)
resource "aws_s3_bucket" "editor_storage" {
  bucket = "my-wysiwyg-editor-storage-123"
}

# AWS ECR 리포지토리 생성 (도커 이미지 저장용)
resource "aws_ecr_repository" "backend_repo" {
  name = "wysiwyg-backend"
}
resource "aws_ecr_repository" "frontend_repo" {
  name = "wysiwyg-frontend"
}