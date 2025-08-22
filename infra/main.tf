resource "aws_s3_bucket" "bullseye_forecast" {
  bucket = var.bucket_name

  tags = {
    Name        = "bullseye-forecast.com"
    Environment = "production"
  }

  lifecycle {
    prevent_destroy = true
  }
}