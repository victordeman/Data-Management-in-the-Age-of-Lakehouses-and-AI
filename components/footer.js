class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-gray-800 text-white p-4 mt-8">
                <div class="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
                    <p>&copy; 2025 Victor Deman. All rights reserved.</p>
                    <nav class="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                        <a href="#" class="hover:text-secondary-500">Privacy Policy</a>
                        <a href="#" class="hover:text-secondary-500">Terms of Use</a>
                        <a href="https://github.com/victordeman/Data-Management-in-the-Age-of-Lakehouses-and-AI" class="hover:text-secondary-500">GitHub Repo</a>
                        <a href="https://github.com/victordeman/Data-Management-in-the-Age-of-Lakehouses-and-AI/issues" class="hover:text-secondary-500">Ask Questions</a>
                        <a href="mailto:victor@deman.com" class="hover:text-secondary-500">Contact</a>
                    </nav>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
