resource "aws_s3_bucket_policy" "bullseye_forecast_policy" {
  bucket = aws_s3_bucket.bullseye_forecast.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.bullseye_forecast.arn}/*"
      }
    ]
  })
}

resource "aws_s3_bucket_public_access_block" "example" {
    bucket = aws_s3_bucket.bullseye_forecast.id

    block_public_acls       = false
    block_public_policy     = false
    ignore_public_acls      = false
    restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "bullseye_forecast_website" {
  bucket = aws_s3_bucket.bullseye_forecast.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}