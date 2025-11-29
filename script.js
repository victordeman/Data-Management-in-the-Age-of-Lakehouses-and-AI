document.addEventListener('DOMContentLoaded', () => {
    // Curriculum toggle
    const showMoreBtn = document.querySelector('button.text-primary-500');
    if (!showMoreBtn) return;

    const icon = showMoreBtn.querySelector('i');
    const timeline = showMoreBtn.parentElement;
    const additionalContentId = 'additional-curriculum';
    let additionalContent = document.getElementById(additionalContentId);

    showMoreBtn.addEventListener('click', toggleCurriculum);
    showMoreBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCurriculum();
        }
    });

    function toggleCurriculum() {
        if (!additionalContent.innerHTML.trim()) {
            // Populate content (as before)
            const weeksData = [
                {
                    week: 'Week 6',
                    title: 'Open Table Formats and Storage Optimization',
                    desc: 'Columnar storage formats, schema evolution, and compaction techniques.',
                    tags: ['Parquet', 'ORC', 'Avro', 'Compression'],
                    takeaway: 'Open formats enable interoperability across tools.',
                    link: 'slides/week6.html'
                },
                {
                    week: 'Week 7-8',
                    title: 'Lakehouse Architectures and Transactions',
                    desc: 'Implementing ACID properties, time travel, and branching in lakehouses.',
                    tags: ['Delta Lake', 'Apache Iceberg', 'Apache Hudi', 'ACID'],
                    takeaway: 'ACID in lakehouses bridges data lakes and warehouses.',
                    link: 'slides/week7-8.html'
                },
                {
                    week: 'Week 9',
                    title: 'Data Ingestion and ETL/ELT Pipelines',
                    desc: 'Designing medallion architecture for data processing layers.',
                    tags: ['Apache Spark', 'dbt', 'Airflow', 'Bronze/Silver/Gold'],
                    takeaway: 'Medallion layers ensure data quality progression.',
                    link: 'slides/week9.html'
                },
                {
                    week: 'Week 10',
                    title: 'Streaming and Real-Time Analytics',
                    desc: 'Handling continuous data streams and unified batch/stream processing.',
                    tags: ['Kafka', 'Flink', 'Spark Streaming', 'Lambda Architecture'],
                    takeaway: 'Unified processing simplifies real-time systems.',
                    link: 'slides/week10.html'
                },
                {
                    week: 'Week 11',
                    title: 'Data Governance, Metadata, and Security',
                    desc: 'Catalogs, lineage tracking, and access controls in distributed systems.',
                    tags: ['Apache Atlas', 'Amundsen', 'RBAC', 'Data Lineage'],
                    takeaway: 'Governance is key for trusted AI data.',
                    link: 'slides/week11.html'
                },
                {
                    week: 'Week 12',
                    title: 'Query Engines and Performance Tuning',
                    desc: 'Federated querying and optimization strategies for large-scale data.',
                    tags: ['Trino', 'Presto', 'DuckDB', 'Z-Ordering', 'Partition Pruning'],
                    takeaway: 'Optimization unlocks fast queries on big data.',
                    link: 'slides/week12.html'
                },
                {
                    week: 'Week 13',
                    title: 'Feature Engineering and Stores for ML',
                    desc: 'Building and serving features for machine learning workflows.',
                    tags: ['Feast', 'Hopsworks', 'Feature Store', 'Point-in-Time Joins'],
                    takeaway: 'Feature stores bridge data and ML teams.',
                    link: 'slides/week13.html'
                },
                {
                    week: 'Week 14',
                    title: 'Vector Databases and AI Integration',
                    desc: 'Embedding storage, semantic search, and retrieval-augmented generation.',
                    tags: ['Milvus', 'PGVector', 'RAG', 'Vector Search'],
                    takeaway: 'Vectors enable AI-powered search.',
                    link: 'slides/week14.html'
                },
                {
                    week: 'Week 15',
                    title: 'Deployment, Monitoring, and Emerging Trends',
                    desc: 'Operationalizing lakehouses, AI-driven automation, and future directions.',
                    tags: ['Docker', 'Kubernetes', 'Prometheus', 'AI Governance'],
                    takeaway: 'Monitoring ensures reliable AI-ready platforms.',
                    link: 'slides/week15.html'
                }
            ];

            additionalContent = document.createElement('div');
            additionalContent.classList.add('space-y-6');
            additionalContent.id = additionalContentId;

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
                            ${data.tags.map(tag => `<span class="text-xs bg-gray-200 px-2 py-1 rounded" title="Information on ${tag}">${tag}</span>`).join('')}
                        </div>
                        <p class="text-xs text-gray-500 mt-2">Key takeaway: ${data.takeaway}</p>
                        <a href="${data.link}" class="text-primary-500 text-xs">Learn More: Slides & Resources</a>
                    </div>
                `;
                additionalContent.appendChild(weekDiv);
            });

            timeline.insertBefore(additionalContent, showMoreBtn);
        }

        const expanded = showMoreBtn.getAttribute('aria-expanded') === 'true';
        showMoreBtn.setAttribute('aria-expanded', !expanded);
        additionalContent.hidden = expanded;

        showMoreBtn.firstChild.nodeValue = expanded ? 'Show full curriculum ' : 'Hide full curriculum ';
        icon.setAttribute('data-feather', expanded ? 'chevron-down' : 'chevron-up');
        feather.replace();

        // Focus management: If expanding, focus first item
        if (!expanded) {
            additionalContent.querySelector('a').focus();
        }
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', toggleMenu);
        menuToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }

    function toggleMenu() {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
        navMenu.classList.toggle('hidden');
        navMenu.setAttribute('aria-hidden', expanded);

        // Focus trap in menu when open
        if (!expanded) {
            navMenu.querySelector('a').focus();
        }
    }

    // Dropdown toggle for mobile (click instead of hover)
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = button.nextElementSibling;
            if (dropdown) {
                const expanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !expanded);
                dropdown.classList.toggle('hidden');
                dropdown.setAttribute('aria-hidden', expanded);
            }
        });
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const dropdown = button.nextElementSibling;
                if (dropdown) {
                    const expanded = button.getAttribute('aria-expanded') === 'true';
                    button.setAttribute('aria-expanded', !expanded);
                    dropdown.classList.toggle('hidden');
                    dropdown.setAttribute('aria-hidden', expanded);
                }
            }
        });
    });

    // Orientation detection (log for now, can adjust layouts)
    window.addEventListener('orientationchange', () => {
        console.log('Orientation changed to: ' + (window.orientation === 0 ? 'portrait' : 'landscape'));
        // Add layout adjustments if needed, e.g., force re-render
    });

    // Focus trap helper for sections (general utility)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const activeSection = document.querySelector('[aria-expanded="true"]:not([hidden])');
            if (activeSection) {
                const focusable = activeSection.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    });
});
