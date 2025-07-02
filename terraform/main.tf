provider "aws" {
  region = "us-west-1"
}

resource "aws_s3_bucket" "example" {
  bucket = "terraform-example-bucket-1"
  acl    = "private"
}
