// Data aplikasi
const apps = [
    {
        id: 1,
        name: 'YouTube Vanced',
        description: 'YouTube Premium Gratis - Tanpa Iklan, Background Play',
        icon: 'https://i.pinimg.com/736x/9a/59/81/9a59817eac70327b226ee3fe81f200c5.jpg',
        rating: 4.8,
        category: 'Media',
        size: '35MB',
        version: '2.0.9',
        downloads: '10M+',
        features: [
            'Tanpa Iklan',
            'Background Play',
            'Picture-in-Picture',
            'SponsorBlock'
        ],
        downloadUrl: 'https://github.com/vancedapps/vanced.net/releases/download/2025-4/vanced.net_vanced_manager_v2.0.9.apk'
    },
    {
        id: 2,
        name: 'Spotify Premium',
        description: 'Musik & Podcast Premium Tanpa Iklan',
        icon: 'https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=w240-h480-rw',
        rating: 4.7,
        category: 'Musik',
        size: '30MB',
        version: '9.0.8.127',
        downloads: '5M+',
        features: [
            'Tanpa Iklan',
            'Kualitas Audio Premium',
            'Download Offline',
            'Equalizer Kustom'
        ],
        downloadUrl: 'https://dl.modfyp.mobi/uploads2/2025/1/Spotify_Premium_Mod_9.0.8.127_Modfyp.com.apk'
    },
    {
        id: 3,
        name: 'Dub AI',
        description: 'AI Voice Generator Premium',
        icon: 'https://i.pinimg.com/736x/08/59/5a/08595a4fcf2231bb806594bcc4a861e6.jpg',
        rating: 4.6,
        category: 'AI & Audio',
        size: '50MB',
        version: 'Latest',
        downloads: '1M+',
        features: [
            'Fitur Premium Aktif',
            'Unlimited Voice Generation',
            'High Quality Output',
            'All Voices Unlocked'
        ],
        downloadUrl: 'https://devuploads.com/t1fz36dm2pem'
    },
    {
        id: 4,
        name: 'Adobe Express Premium',
        description: 'Edit Foto & Video Premium Tanpa Watermark',
        icon: 'https://i.pinimg.com/736x/61/62/6a/61626a4f924cc4ca965ca56c9ecaa246.jpg',
        rating: 4.5,
        category: 'Fotografi',
        size: '85MB',
        version: 'Latest',
        downloads: '1M+',
        features: [
            'Tanpa Watermark',
            'Fitur Premium Terbuka',
            'Template Premium',
            'Export Kualitas Tinggi'
        ],
        downloadUrl: 'https://usersdrive.com/mj68mm9isypc.html'
    }
];

// Data game
const games = [
    {
        id: 5,
        name: 'Brawl Stars Mod',
        description: 'Unlimited Gems & Coins - All Brawlers Unlocked',
        icon: 'https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg=w240-h480-rw',
        rating: 4.4,
        category: 'Game',
        size: '200MB',
        version: 'Latest',
        downloads: '1M+',
        features: [
            'Unlimited Gems',
            'All Brawlers Unlocked',
            'Custom Skins',
            'Unlimited Coins'
        ],
        downloadUrl: 'https://cfdownload.willcheat.com/download/daniillnull.nulls.brawlstars_59197.apk'
    },
    {
        id: 6,
        name: 'eFootball 2024 Mod',
        description: 'Unlimited Money & Full Unlocked Players',
        icon: 'https://i.pinimg.com/736x/a3/d8/af/a3d8af8cf2a7980dc2d443f84a190985.jpg',
        rating: 4.3,
        category: 'Game',
        size: '1.8GB',
        version: 'Latest',
        downloads: '500K+',
        features: [
            'Unlimited GP',
            'All Players Unlocked',
            'Mod Menu',
            'No Root Required'
        ],
        downloadUrl: 'https://cfdownload.willcheat.com/download/jp.konami.pesam.apk'
    },
    {
        id: 7,
        name: 'Clash of Clans Mod',
        description: 'Private Server - Unlimited Resources',
        icon: 'https://i.pinimg.com/736x/ea/58/a5/ea58a5aac85a2014aaf262c4c7518441.jpg',
        rating: 4.5,
        category: 'Game',
        size: '180MB',
        version: '16.386.9',
        downloads: '1M+',
        features: [
            'Unlimited Gems',
            'Unlimited Resources',
            'Max Level Buildings',
            'Private Server'
        ],
        downloadUrl: 'https://download.gamercdn.top/download/clash-of-clans-6-v16.386.9-MOD-gamekillerapp.com.apk'
    },
    {
        id: 8,
        name: 'Character AI Unlock',
        description: 'AI Chat Premium Tanpa Batasan',
        icon: 'https://i.pinimg.com/736x/92/c0/50/92c0500ffe88fd9ad8811abba0fff20d.jpg',
        rating: 4.6,
        category: 'Game',
        size: '45MB',
        version: '1.11.1',
        downloads: '500K+',
        features: [
            'Fitur Premium Terbuka',
            'Tanpa Batasan Chat',
            'Akses Model Premium',
            'Kustomisasi Karakter'
        ],
        downloadUrl: 'https://download.gamercdn.top/download/character-ai-v1.11.1-MOD-gamekillerapp.com.apk'
    }
];

// Variabel untuk menghitung klik iklan
let adClickCount = 0;

// Fungsi untuk menampilkan aplikasi
function displayApps(appsToShow, container = '.app-grid') {
    const appGrid = document.querySelector(container);
    if (!appGrid) return;
    
    const isMobile = window.innerWidth <= 480;
    
    appGrid.innerHTML = appsToShow.map(app => `
        <div class="app-card" onclick="showAppDetails('${app.id}')">
            <img src="${app.icon}" alt="${app.name}">
            <div class="app-card-content">
                <h3>${app.name}</h3>
                <p>${app.description}</p>
                <div class="app-meta">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${app.rating}</span>
                    </div>
                    <span>${app.size}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Fungsi untuk menampilkan detail aplikasi
async function showAppDetails(appId) {
    const app = [...apps, ...games].find(a => a.id === parseInt(appId));
    if (!app) return;

    const result = await Swal.fire({
        title: '',
        html: `
            <div class="app-details" style="padding: 20px;">
                <div class="app-header" style="display: flex; align-items: center; margin-bottom: 20px;">
                    <img src="${app.icon}" alt="${app.name}" style="width: 90px; height: 90px; border-radius: 20px; margin-right: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <div class="app-title" style="text-align: left;">
                        <h2 style="margin: 0; font-size: 24px; color: #01875f;">${app.name}</h2>
                        <div class="rating-downloads" style="margin-top: 8px;">
                            <div class="rating" style="display: flex; align-items: center;">
                                <div class="stars" style="color: #ffc107; margin-right: 10px;">
                                    ${generateStars(app.rating)}
                                </div>
                                <span class="rating-number" style="font-weight: bold; margin-right: 10px;">${app.rating}</span>
                                <span class="downloads" style="color: #666;">${app.downloads} downloads</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Native Banner Ad -->
                <div class="ad-container" style="margin: 15px 0;">
                    <div id="container-6c0c51198f88ed66cea2025869a59e21"></div>
                </div>

                <div class="app-info" style="background: #f8f9fa; border-radius: 15px; padding: 20px; margin-bottom: 20px;">
                    <div class="app-meta" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px;">
                        <div class="meta-item" style="text-align: center; padding: 10px; background: white; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                            <i class="fas fa-code-branch" style="color: #01875f; font-size: 20px; margin-bottom: 5px;"></i>
                            <p style="margin: 0; font-size: 14px; color: #666;">Versi</p>
                            <strong style="color: #333;">${app.version}</strong>
                        </div>
                        <div class="meta-item" style="text-align: center; padding: 10px; background: white; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                            <i class="fas fa-weight-hanging" style="color: #01875f; font-size: 20px; margin-bottom: 5px;"></i>
                            <p style="margin: 0; font-size: 14px; color: #666;">Ukuran</p>
                            <strong style="color: #333;">${app.size}</strong>
                        </div>
                        <div class="meta-item" style="text-align: center; padding: 10px; background: white; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                            <i class="fas fa-tag" style="color: #01875f; font-size: 20px; margin-bottom: 5px;"></i>
                            <p style="margin: 0; font-size: 14px; color: #666;">Kategori</p>
                            <strong style="color: #333;">${app.category}</strong>
                        </div>
                    </div>

                    <div class="features" style="background: white; border-radius: 10px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h3 style="margin: 0 0 15px 0; color: #01875f; font-size: 18px;">
                            <i class="fas fa-star" style="margin-right: 8px;"></i>Fitur Premium
                        </h3>
                        <ul style="margin: 0; padding-left: 20px; list-style-type: none;">
                            ${app.features.map(feature => `
                                <li style="margin-bottom: 10px; position: relative;">
                                    <i class="fas fa-check-circle" style="color: #01875f; margin-right: 8px;"></i>
                                    ${feature}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Banner Ad 728x90 -->
                <div class="ad-container" style="margin: 15px 0;">
                    <script type="text/javascript">
                        atOptions = {
                            'key' : 'd9d9260bb94dad53b406afa63c5e14d6',
                            'format' : 'iframe',
                            'height' : 90,
                            'width' : 728,
                            'params' : {}
                        };
                        document.write('<scr' + 'ipt type="text/javascript" src="//www.highperformanceformat.com/' + atOptions.key + '/invoke.js"></scr' + 'ipt>');
                    </script>
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: '<i class="fas fa-download"></i> Download Sekarang',
        cancelButtonText: 'Batal',
        confirmButtonColor: '#01875f',
        cancelButtonColor: '#6c757d',
        width: '42em',
        customClass: {
            container: 'app-details-modal',
            confirmButton: 'download-button',
            cancelButton: 'cancel-button'
        }
    });

    if (result.isConfirmed) {
        startDownload(app);
    }
}

// Fungsi untuk menghasilkan bintang rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Fungsi untuk memulai download
async function startDownload(app) {
    // Tampilkan loading
    await Swal.fire({
        title: 'Mempersiapkan Download',
        html: 'Mohon tunggu sebentar...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    // Tampilkan countdown
    let timeLeft = 5;
    
    await Swal.fire({
        title: 'Download akan dimulai dalam',
        html: `<b>${timeLeft}</b> detik`,
        timer: timeLeft * 1000,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
            const timer = setInterval(() => {
                timeLeft--;
                Swal.getHtmlContainer().querySelector('b').textContent = timeLeft;
            }, 1000);
            
            setTimeout(() => {
                clearInterval(timer);
                // Mulai download
                window.location.href = app.downloadUrl;
            }, timeLeft * 1000);
        }
    });

    // Tampilkan pesan sukses
    await Swal.fire({
        icon: 'success',
        title: 'Download Dimulai!',
        text: 'File akan tersimpan di folder Download Anda',
        confirmButtonColor: '#01875f'
    });
}

// Fungsi untuk menampilkan dialog about
async function showAbout() {
    await Swal.fire({
        title: 'Tentang FastDownPlus',
        html: `
            <div class="about-content">
                <p>FastDownPlus adalah platform download aplikasi dan game modifikasi terpercaya.</p>
                <p>Semua aplikasi dan game yang tersedia telah dimodifikasi untuk memberikan fitur premium secara gratis.</p>
                <div class="disclaimer">
                    <strong>Disclaimer:</strong>
                    <ul>
                        <li>Gunakan aplikasi modifikasi dengan bijak</li>
                        <li>Kami tidak bertanggung jawab atas risiko penggunaan</li>
                        <li>Selalu backup data penting Anda</li>
                    </ul>
                </div>
                <p class="version">Versi: 1.0.0</p>
            </div>
        `,
        confirmButtonText: 'Tutup',
        confirmButtonColor: '#01875f'
    });
}

// Event listener untuk DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    const bottomNav = document.querySelector('.bottom-nav');
    
    // Tampilkan aplikasi populer saat halaman dimuat
    const popularAppsContainer = document.querySelector('.popular-apps .app-grid');
    if (popularAppsContainer) {
        displayApps(apps, '.popular-apps .app-grid');
    }
    
    // Tampilkan game
    const gamesContainer = document.querySelector('.games-section .app-grid');
    if (gamesContainer) {
        displayApps(games, '.games-section .app-grid');
    }

    // Event listener untuk navigasi
    bottomNav.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        
        // Jika link adalah WhatsApp, biarkan berjalan normal
        if (link.href.includes('wa.me')) {
            return;
        }
        
        e.preventDefault();
        
        // Update active state
        document.querySelectorAll('.bottom-nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        
        // Handle section visibility
        const sectionId = link.dataset.section;
        if (sectionId) {
            document.querySelectorAll('section').forEach(section => {
                if (section.classList.contains(sectionId)) {
                    section.style.display = 'block';
                    section.scrollIntoView({ behavior: 'smooth' });
                } else {
                    section.style.display = 'none';
                }
            });
        }
    });
}); 