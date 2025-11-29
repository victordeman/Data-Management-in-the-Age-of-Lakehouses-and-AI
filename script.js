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
                    tags: ['Parquet', 'ORC', 'Avro', 'Compression'],
                    takeaway: 'Open formats enable interoperability across tools.',
                    link: 'slides/week6.html'
                },
                // ... (keep the rest as before, adding takeaway and link to each)
                {
                    week: 'Week 15',
                    title: 'Deployment, Monitoring, and Emerging Trends',
                    desc: 'Operationalizing lakehouses, AI-driven automation, and future directions.',
                    tags: ['Docker', 'Kubernetes', 'Prometheus', 'AI Governance'],
                    takeaway: 'Monitoring ensures reliable AI-ready platforms.',
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
