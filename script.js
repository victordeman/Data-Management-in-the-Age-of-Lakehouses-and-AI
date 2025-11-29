document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.querySelector('button.text-primary-500');
    if (!showMoreBtn) return;

    const icon = showMoreBtn.querySelector('i');
    const timeline = showMoreBtn.parentElement;
    let additionalContent = null;

    showMoreBtn.addEventListener('click', () => {
        if (!additionalContent) {
            additionalContent = document.createElement('div');
            additionalContent.classList.add('space-y-6');

            const weeksData = [
                {
                    week: 'Week 6',
                    title: 'Open Table Formats and Storage Optimization',
                    desc: 'Columnar storage formats, schema evolution, and compaction techniques.',
                    tags: ['Parquet', 'ORC', 'Avro', 'Compression']
                },
                {
                    week: 'Week 7-8',
                    title: 'Lakehouse Architectures and Transactions',
                    desc: 'Implementing ACID properties, time travel, and branching in lakehouses.',
                    tags: ['Delta Lake', 'Apache Iceberg', 'Apache Hudi', 'ACID']
                },
                {
                    week: 'Week 9',
                    title: 'Data Ingestion and ETL/ELT Pipelines',
                    desc: 'Designing medallion architecture for data processing layers.',
                    tags: ['Apache Spark', 'dbt', 'Airflow', 'Bronze/Silver/Gold']
                },
                {
                    week: 'Week 10',
                    title: 'Streaming and Real-Time Analytics',
                    desc: 'Handling continuous data streams and unified batch/stream processing.',
                    tags: ['Kafka', 'Flink', 'Spark Streaming', 'Lambda Architecture']
                },
                {
                    week: 'Week 11',
                    title: 'Data Governance, Metadata, and Security',
                    desc: 'Catalogs, lineage tracking, and access controls in distributed systems.',
                    tags: ['Apache Atlas', 'Amundsen', 'RBAC', 'Data Lineage']
                },
                {
                    week: 'Week 12',
                    title: 'Query Engines and Performance Tuning',
                    desc: 'Federated querying and optimization strategies for large-scale data.',
                    tags: ['Trino', 'Presto', 'DuckDB', 'Z-Ordering', 'Partition Pruning']
                },
                {
                    week: 'Week 13',
                    title: 'Feature Engineering and Stores for ML',
                    desc: 'Building and serving features for machine learning workflows.',
                    tags: ['Feast', 'Hopsworks', 'Feature Store', 'Point-in-Time Joins']
                },
                {
                    week: 'Week 14',
                    title: 'Vector Databases and AI Integration',
                    desc: 'Embedding storage, semantic search, and retrieval-augmented generation.',
                    tags: ['Milvus', 'PGVector', 'RAG', 'Vector Search']
                },
                {
                    week: 'Week 15',
                    title: 'Deployment, Monitoring, and Emerging Trends',
                    desc: 'Operationalizing lakehouses, AI-driven automation, and future directions.',
                    tags: ['Docker', 'Kubernetes', 'Prometheus', 'AI Governance']
                }
            ];

            weeksData.forEach(data => {
                const weekDiv = document.createElement('div');
                weekDiv.classList.add('flex', 'flex-col', 'md:flex-row');
                weekDiv.innerHTML = `
                    <div class="md:w-1/4 bg-primary-50 p-3 rounded-l-lg">
                        <span class="font-bold text-primary-600">${data.week}</span>
                    </div>
                    <div class="md:w-3/4 bg-gray-50 p-3 rounded-r-lg">
                        <h3 class="font-medium">${data.title}</h3>
                        <p class="text-sm text-gray-600">${data.desc}</p>
                        <div class="mt-2 flex flex-wrap gap-2">
                            ${data.tags.map(tag => `<span class="text-xs bg-gray-200 px-2 py-1 rounded">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                additionalContent.appendChild(weekDiv);
            });

            timeline.insertBefore(additionalContent, showMoreBtn);

            // First click: show content and update button
            showMoreBtn.firstChild.nodeValue = 'Hide full curriculum ';
            icon.setAttribute('data-feather', 'chevron-up');
            feather.replace();
        } else {
            if (additionalContent.classList.contains('hidden')) {
                additionalContent.classList.remove('hidden');
                showMoreBtn.firstChild.nodeValue = 'Hide full curriculum ';
                icon.setAttribute('data-feather', 'chevron-up');
                feather.replace();
            } else {
                additionalContent.classList.add('hidden');
                showMoreBtn.firstChild.nodeValue = 'Show full curriculum ';
                icon.setAttribute('data-feather', 'chevron-down');
                feather.replace();
            }
        }
    });
});
