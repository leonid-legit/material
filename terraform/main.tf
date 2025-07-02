provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "example" {
  bucket = "terraform-example-bucket"
  acl    = "private"
}
