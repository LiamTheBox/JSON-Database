async function loadDistros() {
    try {
        const response = await fetch('distros.json');
        const distros = await response.json();
        const distroList = document.getElementById('distro-list');

        distros.forEach(distro => {
            const distroItem = document.createElement('div');
            distroItem.className = 'distro-item';
            distroItem.innerHTML = `
                <h2>${distro.name}</h2>
                <p>${distro.description}</p>
                <p><strong>Version:</strong> ${distro.version}</p>
                <p><strong>Magnet Link:</strong></p>
                <p class="magnet-link">${distro.magnetLink}</p>

                <a href="${distro.magnetLink}">Magnet Link</a>

                <a href="https://www.w3schools.com/">Visit W3Schools.com!</a>

            `;
            distroList.appendChild(distroItem);
        });
    } catch (error) {
        console.error('Error loading distros:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadDistros);

