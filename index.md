---
title: Big Data & Cloud Computing
---

# Big Data & Cloud Computing

## Course Overview
In this lecture, we'll explore how to harness massive datasets with distributed systems and cloud-native architectures. From batch processing with Hadoop to real-time streaming on Kubernetes, you'll build scalable pipelines that power AI and analytics in 2025.

**Key Takeaways:**
- Design fault-tolerant data systems using Spark, Flink, and Kafka.
- Deploy on AWS, GCP, or Azure: From S3 data lakes to serverless ETL.
- Hands-on: No cloud credits needed—simulate everything locally with Docker/MinIO.

**Duration:** 8 weeks | **Format:** Lectures + Labs | **Prerequisites:** Python/SQL basics.

[Show full curriculum](#curriculum) | [Fork this repo to start your capstone!](https://github.com/victordeman/Big-Data-Cloud-Computing/fork)

## Curriculum Timeline
- **Weeks 1-2: Big Data Fundamentals**  
  Hadoop ecosystem, MapReduce, HDFS. [Slides →](/slides/week1-2.html)
- **Weeks 3-4: Streaming & Processing**  
  Kafka for ingestion, Spark/Flink for ETL. Lab: Real-time tweet analysis. [Slides →](/slides/week3-4.html)
- **Weeks 5-6: Cloud Platforms**  
  AWS EMR, GCP Dataproc, Azure Synapse. Infra-as-code with Terraform. [Slides →](/slides/week5-6.html)
- **Weeks 7-8: Advanced Topics & Optimization**  
  Cost management, security (IAM/Kerberos), ML integration (SageMaker). [Slides →](/slides/week7-8.html)

## Capstone Project
Build a production-grade data pipeline: Ingest public logs (e.g., from Kaggle) → process with Spark on a local "cloud" sim → query via Trino → dashboard with Grafana.

**Requirements:**
1. Set up MinIO (S3-like) + Delta Lake for ACID tables.
2. Implement partitioning, time travel, and federated queries.
3. Add monitoring with Prometheus.
4. Demo: Scale to 1TB simulated data.

Starter template in `/capstone/starter/`. Submit via PR. [Rubric →](/capstone/rubric.html)

## Grading Structure
- Labs (40%): Weekly Jupyter notebooks.
- Capstone (40%): Code quality + demo video.
- Participation (20%): Forum discussions on X or Discord.

## Prior Knowledge & Resources
- **Books:** "Designing Data-Intensive Applications" by Kleppmann.
- **Tools:** Install Docker, pyspark, boto3 (Python AWS SDK).
- **Docs:** [Hadoop](https://hadoop.apache.org/docs/), [Spark](https://spark.apache.org/docs/), [AWS Big Data](https://aws.amazon.com/big-data/).

[Full resources →](/resources/)
