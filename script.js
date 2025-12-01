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
                    week: 'Week 6-7',
                    title: '<a href="slides/week6-7.html" class="text-primary-500 hover:underline">Open Table Formats and Storage Optimization</a>',
                    desc: 'Columnar storage formats, schema evolution, and compaction techniques.',
                    tags: ['Parquet', 'ORC', 'Avro', 'Compression'],
                    takeaway: 'Open formats enable interoperability across tools.',
                    link: 'slides/week6-7.html'
                },
                {
                    week: 'Week 8',
                    title: '<a href="slides/week8.html" class="text-primary-500 hover:underline">Catalogs, Governance & Data Versioning</a>',
                    desc: 'Hive Metastore → Nessie (Git-for-data)',
                    tags: ['OpenMetadata', 'Amundsen', 'Lineage', 'Tagging', 'Ownership'],
                    takeaway: 'Governance is key for trusted AI data.',
                    link: 'slides/week8.html'
                },
                {
                    week: 'Week 9-10',
                    title: '<a href="slides/week9-10.html" class="text-primary-500 hover:underline">Processing Engines – Batch & Beyond</a>',
                    desc: 'Apache Spark 3.5+ (PySpark)',
                    tags: ['Polars (Rust)', 'DuckDB', 'Dask vs Modin vs Spark'],
                    takeaway: 'Choose engines based on workload scale.',
                    link: 'slides/week9-10.html'
                },
                {
                    week: 'Week 11',
                    title: '<a href="slides/week11.html" class="text-primary-500 hover:underline">Stream Processing & Change Data Capture</a>',
                    desc: 'Apache Kafka + Kafka Connect',
                    tags: ['Debezium for CDC', 'RisingWave / Materialize'],
                    takeaway: 'Real-time data enables immediate insights.',
                    link: 'slides/week11.html'
                },
                {
                    week: 'Week 12',
                    title: '<a href="slides/week12.html" class="text-primary-500 hover:underline">Query Federation & Modern Analytics Engines</a>',
                    desc: 'Trino (federated SQL)',
                    tags: ['Druid vs ClickHouse vs Pinot'],
                    takeaway: 'Federated queries unify disparate sources.',
                    link: 'slides/week12.html'
                },
                {
                    week: 'Week 13',
                    title: '<a href="slides/week13.html" class="text-primary-500 hover:underline">Orchestration, Quality & Transformation</a>',
                    desc: 'Apache Airflow (or Mage/Prefect)',
                    tags: ['dbt Core', 'Great Expectations / Soda'],
                    takeaway: 'Orchestration ensures reliable pipelines.',
                    link: 'slides/week13.html'
                },
                {
                    week: 'Week 14',
                    title: '<a href="slides/week14.html" class="text-primary-500 hover:underline">Feature Stores & Preparing Data for AI/ML</a>',
                    desc: 'Feast (open-source feature store)',
                    tags: ['Online + offline serving', 'Point-in-time joins', 'MLflow tracking'],
                    takeaway: 'Feature stores bridge data and ML.',
                    link: 'slides/week14.html'
                },
                {
                    week: 'Week 15',
                    title: '<a href="slides/week15.html" class="text-primary-500 hover:underline">Vector Data Management & RAG-Ready Platforms + Capstone</a>',
                    desc: 'Milvus / Qdrant / pgvector',
                    tags: ['Hybrid search', 'Metadata filtering', 'Local LLMs with Ollama'],
                    takeaway: 'Vector data powers AI applications.',
                    link: 'slides/week15.html'
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
                            ${data.tags.map(tag => `<span class="text-xs bg-gray-200 px-2 py-1 rounded" title="Info on ${tag}">${tag}</span>`).join('')}
                        </div>
                        <p class="text-xs text-gray-500 mt-2">Key takeaway: ${data.takeaway}</p>
                        <a href="${data.link}" class="text-primary-500 text-xs">Learn More: Slides & Resources</a>
                    </div>
                `;
                additionalContent.appendChild(weekDiv);
            });

            timeline.insertBefore(additionalContent, showMoreBtn);

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
