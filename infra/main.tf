resource "aws_s3_bucket" "bullseye_report" {
    bucket = var.bucket_name
    acl    = "public-read"

    policy = jsonencode({
        Version = "2012-10-17",
        Statement = [
        {
            Sid       = "PublicReadGetObject",
            Effect    = "Allow",
            Principal = "*",
            Action    = "s3:GetObject",
            Resource  = "${aws_s3_bucket.bullseye_report.arn}/*"
        }
        ]
    })

    tags = {
        Name        = "bullseye-report.com"
        Environment = "production"
    }

    lifecycle {
        prevent_destroy = true
    }
}

resource "aws_s3_bucket_website_configuration" "bullseye_report_website" {
  bucket = var.bucket_name

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}