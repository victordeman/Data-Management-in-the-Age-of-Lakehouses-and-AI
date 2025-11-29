class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-gray-800 text-white p-4 mt-8">
                <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2025 Victor Deman. All rights reserved.</p>
                    <nav class="flex space-x-4 mt-2 md:mt-0">
                        <a href="#" class="hover:text-secondary-500">Privacy Policy</a>
                        <a href="#" class="hover:text-secondary-500">Terms of Use</a>
                        <a href="https://github.com/victordeman/Data-Management-in-the-Age-of-Lakehouses-and-AI" class="hover:text-secondary-500">GitHub Repo</a>
                    </nav>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
