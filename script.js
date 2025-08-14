// Pet Name Generator - Main JavaScript File

class PetNameGenerator {
    constructor() {
        this.names = {
            dog: {
                male: [
                    'Max', 'Buddy', 'Charlie', 'Cooper', 'Rocky', 'Bear', 'Duke', 'Tucker', 'Oliver', 'Teddy',
                    'Bentley', 'Milo', 'Winston', 'Murphy', 'Finn', 'Baxter', 'Zeus', 'Apollo', 'Thor', 'Loki',
                    'Shadow', 'Rex', 'Bruno', 'Jake', 'Sam', 'Rusty', 'Bailey', 'Cody', 'Buster', 'Riley'
                ],
                female: [
                    'Bella', 'Luna', 'Lucy', 'Daisy', 'Sadie', 'Molly', 'Sophie', 'Chloe', 'Bailey', 'Lola',
                    'Zoe', 'Abby', 'Ginger', 'Roxy', 'Gracie', 'Maggie', 'Stella', 'Penny', 'Ruby', 'Rosie',
                    'Coco', 'Nova', 'Lily', 'Ellie', 'Mia', 'Nala', 'Willow', 'Emma', 'Harley', 'Scout'
                ],
                unisex: [
                    'Riley', 'Casey', 'Harley', 'Quinn', 'Avery', 'Jordan', 'Parker', 'Sage', 'Rowan', 'Skyler',
                    'Blake', 'Dakota', 'Morgan', 'Taylor', 'Reese', 'Hayden', 'Kendall', 'Cameron', 'Logan', 'River'
                ]
            },
            cat: {
                male: [
                    'Oliver', 'Leo', 'Milo', 'Charlie', 'Max', 'Jack', 'Simba', 'Loki', 'Oscar', 'Jasper',
                    'Shadow', 'Tiger', 'Smokey', 'Felix', 'Sam', 'Toby', 'Rocky', 'Gizmo', 'Buster', 'Tommy',
                    'Whiskers', 'Fluffy', 'Mittens', 'Boots', 'Bandit', 'Rusty', 'Chester', 'Murphy', 'Baxter', 'Finn'
                ],
                female: [
                    'Luna', 'Bella', 'Lucy', 'Kitty', 'Chloe', 'Sophie', 'Cleo', 'Nala', 'Daisy', 'Molly',
                    'Lily', 'Gracie', 'Zoe', 'Mia', 'Stella', 'Penny', 'Ruby', 'Rosie', 'Coco', 'Nova',
                    'Willow', 'Emma', 'Harley', 'Scout', 'Sadie', 'Ginger', 'Roxy', 'Maggie', 'Abby', 'Ellie'
                ],
                unisex: [
                    'Shadow', 'Smokey', 'Tiger', 'Whiskers', 'Fluffy', 'Mittens', 'Boots', 'Bandit', 'Rusty', 'Chester',
                    'Riley', 'Casey', 'Harley', 'Quinn', 'Avery', 'Jordan', 'Parker', 'Sage', 'Rowan', 'Skyler'
                ]
            },
            bird: {
                male: [
                    'Rio', 'Blue', 'Sky', 'Sunny', 'Buddy', 'Charlie', 'Max', 'Rocky', 'Shadow', 'Echo',
                    'Phoenix', 'Storm', 'Thunder', 'Lightning', 'Flash', 'Blitz', 'Zephyr', 'Gale', 'Breeze', 'Wind',
                    'Cloud', 'Rain', 'Mist', 'Fog', 'Haze', 'Smoke', 'Ash', 'Ember', 'Flame', 'Blaze'
                ],
                female: [
                    'Luna', 'Star', 'Dawn', 'Twilight', 'Sunset', 'Rainbow', 'Rose', 'Lily', 'Daisy', 'Iris',
                    'Violet', 'Sage', 'Mint', 'Jade', 'Pearl', 'Crystal', 'Diamond', 'Ruby', 'Sapphire', 'Emerald',
                    'Goldie', 'Silver', 'Copper', 'Bronze', 'Platinum', 'Titanium', 'Steel', 'Iron', 'Nickel', 'Zinc'
                ],
                unisex: [
                    'Rio', 'Blue', 'Sky', 'Sunny', 'Buddy', 'Charlie', 'Max', 'Rocky', 'Shadow', 'Echo',
                    'Phoenix', 'Storm', 'Thunder', 'Lightning', 'Flash', 'Blitz', 'Zephyr', 'Gale', 'Breeze', 'Wind'
                ]
            },
            fish: {
                male: [
                    'Nemo', 'Bubbles', 'Splash', 'Fin', 'Gill', 'Scales', 'Coral', 'Reef', 'Ocean', 'Sea',
                    'Wave', 'Tide', 'Current', 'Stream', 'River', 'Lake', 'Pond', 'Brook', 'Creek', 'Bay',
                    'Harbor', 'Marina', 'Port', 'Dock', 'Pier', 'Beach', 'Shore', 'Coast', 'Island', 'Atoll'
                ],
                female: [
                    'Dory', 'Pearl', 'Coral', 'Reef', 'Ocean', 'Sea', 'Wave', 'Tide', 'Current', 'Stream',
                    'River', 'Lake', 'Pond', 'Brook', 'Creek', 'Bay', 'Harbor', 'Marina', 'Port', 'Dock',
                    'Pier', 'Beach', 'Shore', 'Coast', 'Island', 'Atoll', 'Luna', 'Star', 'Dawn', 'Twilight'
                ],
                unisex: [
                    'Nemo', 'Bubbles', 'Splash', 'Fin', 'Gill', 'Scales', 'Coral', 'Reef', 'Ocean', 'Sea',
                    'Wave', 'Tide', 'Current', 'Stream', 'River', 'Lake', 'Pond', 'Brook', 'Creek', 'Bay'
                ]
            },
            rabbit: {
                male: [
                    'Bunny', 'Hoppy', 'Thumper', 'Cotton', 'Fluffy', 'Snowball', 'Marshmallow', 'Cloud', 'Puff', 'Fuzzy',
                    'Velvet', 'Silk', 'Satin', 'Linen', 'Wool', 'Fleece', 'Fur', 'Hair', 'Coat', 'Hide',
                    'Skin', 'Leather', 'Suede', 'Nylon', 'Polyester', 'Acrylic', 'Rayon', 'Spandex', 'Lycra', 'Elastane'
                ],
                female: [
                    'Bunny', 'Hoppy', 'Thumper', 'Cotton', 'Fluffy', 'Snowball', 'Marshmallow', 'Cloud', 'Puff', 'Fuzzy',
                    'Velvet', 'Silk', 'Satin', 'Linen', 'Wool', 'Fleece', 'Fur', 'Hair', 'Coat', 'Hide',
                    'Skin', 'Leather', 'Suede', 'Nylon', 'Polyester', 'Acrylic', 'Rayon', 'Spandex', 'Lycra', 'Elastane'
                ],
                unisex: [
                    'Bunny', 'Hoppy', 'Thumper', 'Cotton', 'Fluffy', 'Snowball', 'Marshmallow', 'Cloud', 'Puff', 'Fuzzy',
                    'Velvet', 'Silk', 'Satin', 'Linen', 'Wool', 'Fleece', 'Fur', 'Hair', 'Coat', 'Hide'
                ]
            },
            hamster: {
                male: [
                    'Hammy', 'Nibbles', 'Chewy', 'Crunchy', 'Munchy', 'Snacky', 'Treat', 'Cookie', 'Cake', 'Pie',
                    'Candy', 'Sweet', 'Sugar', 'Honey', 'Syrup', 'Jam', 'Jelly', 'Marmalade', 'Preserve', 'Conserve',
                    'Pickle', 'Relish', 'Chutney', 'Sauce', 'Gravy', 'Broth', 'Soup', 'Stew', 'Casserole', 'Casserole'
                ],
                female: [
                    'Hammy', 'Nibbles', 'Chewy', 'Crunchy', 'Munchy', 'Snacky', 'Treat', 'Cookie', 'Cake', 'Pie',
                    'Candy', 'Sweet', 'Sugar', 'Honey', 'Syrup', 'Jam', 'Jelly', 'Marmalade', 'Preserve', 'Conserve',
                    'Pickle', 'Relish', 'Chutney', 'Sauce', 'Gravy', 'Broth', 'Soup', 'Stew', 'Casserole', 'Casserole'
                ],
                unisex: [
                    'Hammy', 'Nibbles', 'Chewy', 'Crunchy', 'Munchy', 'Snacky', 'Treat', 'Cookie', 'Cake', 'Pie',
                    'Candy', 'Sweet', 'Sugar', 'Honey', 'Syrup', 'Jam', 'Jelly', 'Marmalade', 'Preserve', 'Conserve'
                ]
            },
            horse: {
                male: [
                    'Thunder', 'Storm', 'Lightning', 'Flash', 'Blitz', 'Bolt', 'Spark', 'Flame', 'Blaze', 'Fire',
                    'Ember', 'Ash', 'Smoke', 'Mist', 'Fog', 'Haze', 'Cloud', 'Rain', 'Snow', 'Ice',
                    'Frost', 'Freeze', 'Chill', 'Cool', 'Cold', 'Warm', 'Hot', 'Heat', 'Sun', 'Star'
                ],
                female: [
                    'Thunder', 'Storm', 'Lightning', 'Flash', 'Blitz', 'Bolt', 'Spark', 'Flame', 'Blaze', 'Fire',
                    'Ember', 'Ash', 'Smoke', 'Mist', 'Fog', 'Haze', 'Cloud', 'Rain', 'Snow', 'Ice',
                    'Frost', 'Freeze', 'Chill', 'Cool', 'Cold', 'Warm', 'Hot', 'Heat', 'Sun', 'Star'
                ],
                unisex: [
                    'Thunder', 'Storm', 'Lightning', 'Flash', 'Blitz', 'Bolt', 'Spark', 'Flame', 'Blaze', 'Fire',
                    'Ember', 'Ash', 'Smoke', 'Mist', 'Fog', 'Haze', 'Cloud', 'Rain', 'Snow', 'Ice'
                ]
            },
            reptile: {
                male: [
                    'Spike', 'Rex', 'T-Rex', 'Raptor', 'Dino', 'Fossil', 'Bone', 'Skull', 'Spine', 'Tail',
                    'Scale', 'Armor', 'Shield', 'Sword', 'Blade', 'Knife', 'Dagger', 'Spear', 'Arrow', 'Bow',
                    'Crossbow', 'Cannon', 'Gun', 'Rifle', 'Pistol', 'Revolver', 'Shotgun', 'Machine', 'Gun', 'Bazooka'
                ],
                female: [
                    'Spike', 'Rex', 'T-Rex', 'Raptor', 'Dino', 'Fossil', 'Bone', 'Skull', 'Spine', 'Tail',
                    'Scale', 'Armor', 'Shield', 'Sword', 'Blade', 'Knife', 'Dagger', 'Spear', 'Arrow', 'Bow',
                    'Crossbow', 'Cannon', 'Gun', 'Rifle', 'Pistol', 'Revolver', 'Shotgun', 'Machine', 'Gun', 'Bazooka'
                ],
                unisex: [
                    'Spike', 'Rex', 'T-Rex', 'Raptor', 'Dino', 'Fossil', 'Bone', 'Skull', 'Spine', 'Tail',
                    'Scale', 'Armor', 'Shield', 'Sword', 'Blade', 'Knife', 'Dagger', 'Spear', 'Arrow', 'Bow'
                ]
            }
        };

        this.recentNames = [];
        this.favorites = this.loadFavorites();
        this.currentName = null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateFavoritesCount();
        this.renderFavorites();
    }

    bindEvents() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // Generate button
        document.getElementById('generateBtn').addEventListener('click', () => this.generateName());

        // Copy and favorite buttons (delegated)
        document.addEventListener('click', (e) => {
            if (e.target.closest('.copy-btn')) {
                this.copyToClipboard();
            } else if (e.target.closest('.favorite-btn')) {
                this.toggleFavorite();
            } else if (e.target.closest('.remove-favorite')) {
                this.removeFavorite(e.target.closest('.favorite-item').dataset.name);
            } else if (e.target.closest('.recent-name-item')) {
                this.selectRecentName(e.target.closest('.recent-name-item').dataset.name);
            }
        });

        // Clear favorites
        document.getElementById('clearFavorites').addEventListener('click', () => this.clearFavorites());

        // Toast close
        document.querySelector('.toast-close').addEventListener('click', () => this.hideToast());
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
    }

    generateName() {
        const category = document.getElementById('category').value;
        const gender = document.getElementById('gender').value;
        const length = document.getElementById('length').value;

        // Get available names based on filters
        let availableNames = [];
        
        if (category === 'all') {
            // Get names from all categories
            Object.values(this.names).forEach(catNames => {
                if (gender === 'all') {
                    Object.values(catNames).forEach(genderNames => {
                        availableNames = availableNames.concat(genderNames);
                    });
                } else {
                    availableNames = availableNames.concat(catNames[gender] || []);
                }
            });
        } else {
            const catNames = this.names[category];
            if (gender === 'all') {
                Object.values(catNames).forEach(genderNames => {
                    availableNames = availableNames.concat(genderNames);
                });
            } else {
                availableNames = catNames[gender] || [];
            }
        }

        // Filter by length if specified
        if (length !== 'all') {
            availableNames = availableNames.filter(name => {
                const nameLength = name.length;
                switch (length) {
                    case 'short': return nameLength >= 2 && nameLength <= 4;
                    case 'medium': return nameLength >= 5 && nameLength <= 7;
                    case 'long': return nameLength >= 8;
                    default: return true;
                }
            });
        }

        if (availableNames.length === 0) {
            this.showToast('No names match your current filters. Try adjusting your selection.', 'error');
            return;
        }

        // Generate random name
        const randomName = availableNames[Math.floor(Math.random() * availableNames.length)];
        
        // Determine actual category and gender for the generated name
        let actualCategory = category;
        let actualGender = gender;
        
        if (category === 'all') {
            // Find which category this name belongs to
            for (const [cat, catNames] of Object.entries(this.names)) {
                for (const [gen, names] of Object.entries(catNames)) {
                    if (names.includes(randomName)) {
                        actualCategory = cat;
                        actualGender = gen;
                        break;
                    }
                }
                if (actualCategory !== 'all') break;
            }
        } else if (gender === 'all') {
            // Find which gender this name belongs to
            for (const [gen, names] of Object.entries(this.names[category])) {
                if (names.includes(randomName)) {
                    actualGender = gen;
                    break;
                }
            }
        }

        this.currentName = {
            name: randomName,
            category: actualCategory,
            gender: actualGender,
            timestamp: Date.now()
        };

        this.displayResult();
        this.addToRecent();
        this.showToast('Name generated successfully!', 'success');
    }

    displayResult() {
        const resultSection = document.getElementById('resultSection');
        const generatedName = document.getElementById('generatedName');
        const nameCategory = document.getElementById('nameCategory');
        const nameGender = document.getElementById('nameGender');
        const favoriteBtn = document.querySelector('.favorite-btn i');

        // Display the name
        generatedName.textContent = this.currentName.name;
        
        // Display category and gender
        nameCategory.textContent = this.getCategoryDisplayName(this.currentName.category);
        nameGender.textContent = this.getGenderDisplayName(this.currentName.gender);

        // Update favorite button state
        const isFavorite = this.favorites.some(fav => fav.name === this.currentName.name);
        favoriteBtn.className = isFavorite ? 'fas fa-heart' : 'far fa-heart';

        // Show result section with animation
        resultSection.style.display = 'block';
        resultSection.querySelector('.result-card').classList.add('success-animation');
        
        setTimeout(() => {
            resultSection.querySelector('.result-card').classList.remove('success-animation');
        }, 600);
    }

    addToRecent() {
        if (!this.currentName) return;

        // Remove if already exists
        this.recentNames = this.recentNames.filter(item => item.name !== this.currentName.name);
        
        // Add to beginning
        this.recentNames.unshift(this.currentName);
        
        // Keep only last 6 names
        if (this.recentNames.length > 6) {
            this.recentNames = this.recentNames.slice(0, 6);
        }

        this.renderRecentNames();
    }

    renderRecentNames() {
        const recentSection = document.getElementById('recentSection');
        const recentNamesContainer = document.getElementById('recentNames');

        if (this.recentNames.length === 0) {
            recentSection.style.display = 'none';
            return;
        }

        recentSection.style.display = 'block';
        recentNamesContainer.innerHTML = this.recentNames.map(item => `
            <div class="recent-name-item" data-name="${item.name}">
                <div class="recent-name-text">${item.name}</div>
                <div class="recent-name-meta">${this.getCategoryDisplayName(item.category)} • ${this.getGenderDisplayName(item.gender)}</div>
            </div>
        `).join('');
    }

    selectRecentName(name) {
        const recentName = this.recentNames.find(item => item.name === name);
        if (recentName) {
            this.currentName = recentName;
            this.displayResult();
            this.showToast('Recent name selected!', 'success');
        }
    }

    toggleFavorite() {
        if (!this.currentName) return;

        const favoriteBtn = document.querySelector('.favorite-btn i');
        const isFavorite = this.favorites.some(fav => fav.name === this.currentName.name);

        if (isFavorite) {
            this.removeFavorite(this.currentName.name);
        } else {
            this.addToFavorites();
        }
    }

    addToFavorites() {
        if (!this.currentName) return;

        this.favorites.unshift(this.currentName);
        this.saveFavorites();
        this.updateFavoritesCount();
        this.renderFavorites();
        
        // Update button
        document.querySelector('.favorite-btn i').className = 'fas fa-heart';
        
        this.showToast('Added to favorites!', 'success');
    }

    removeFavorite(name) {
        this.favorites = this.favorites.filter(fav => fav.name !== name);
        this.saveFavorites();
        this.updateFavoritesCount();
        this.renderFavorites();
        
        // Update button if current name is removed
        if (this.currentName && this.currentName.name === name) {
            document.querySelector('.favorite-btn i').className = 'far fa-heart';
        }
        
        this.showToast('Removed from favorites!', 'info');
    }

    clearFavorites() {
        if (this.favorites.length === 0) {
            this.showToast('No favorites to clear!', 'info');
            return;
        }

        if (confirm('Are you sure you want to clear all favorites?')) {
            this.favorites = [];
            this.saveFavorites();
            this.updateFavoritesCount();
            this.renderFavorites();
            
            // Update button if current name was in favorites
            if (this.currentName) {
                document.querySelector('.favorite-btn i').className = 'far fa-heart';
            }
            
            this.showToast('All favorites cleared!', 'success');
        }
    }

    renderFavorites() {
        const favoritesList = document.getElementById('favoritesList');
        
        if (this.favorites.length === 0) {
            favoritesList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-heart-broken"></i>
                    <p>No favorite names yet. Generate some names and add them to your favorites!</p>
                </div>
            `;
            return;
        }

        favoritesList.innerHTML = this.favorites.map(item => `
            <div class="favorite-item" data-name="${item.name}">
                <div>
                    <div class="favorite-name">${item.name}</div>
                    <div class="favorite-meta">${this.getCategoryDisplayName(item.category)} • ${this.getGenderDisplayName(item.gender)}</div>
                </div>
                <div class="favorite-actions">
                    <button class="action-btn copy-btn" title="Copy to clipboard">
                        <i class="fas fa-copy"></i>
                    </button>
                    <button class="action-btn remove-favorite" title="Remove from favorites">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateFavoritesCount() {
        const countElement = document.querySelector('.favorites-count');
        countElement.textContent = this.favorites.length;
    }

    copyToClipboard() {
        const textToCopy = this.currentName ? this.currentName.name : '';
        
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                this.showToast('Name copied to clipboard!', 'success');
            }).catch(() => {
                this.fallbackCopyToClipboard(textToCopy);
            });
        } else {
            this.fallbackCopyToClipboard(textToCopy);
        }
    }

    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showToast('Name copied to clipboard!', 'success');
        } catch (err) {
            this.showToast('Failed to copy name', 'error');
        }
        
        document.body.removeChild(textArea);
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const toastMessage = toast.querySelector('.toast-message');
        
        toastMessage.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.add('show');
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            this.hideToast();
        }, 3000);
    }

    hideToast() {
        const toast = document.getElementById('toast');
        toast.classList.remove('show');
    }

    getCategoryDisplayName(category) {
        const categoryMap = {
            'dog': 'Dog',
            'cat': 'Cat',
            'bird': 'Bird',
            'fish': 'Fish',
            'rabbit': 'Rabbit',
            'hamster': 'Hamster',
            'horse': 'Horse',
            'reptile': 'Reptile'
        };
        return categoryMap[category] || category;
    }

    getGenderDisplayName(gender) {
        const genderMap = {
            'male': 'Male',
            'female': 'Female',
            'unisex': 'Unisex'
        };
        return genderMap[gender] || gender;
    }

    loadFavorites() {
        try {
            const saved = localStorage.getItem('petNameFavorites');
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error loading favorites:', error);
            return [];
        }
    }

    saveFavorites() {
        try {
            localStorage.setItem('petNameFavorites', JSON.stringify(this.favorites));
        } catch (error) {
            console.error('Error saving favorites:', error);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PetNameGenerator();
});

// Add some fun Easter eggs
document.addEventListener('keydown', (e) => {
    // Press 'G' to generate a name
    if (e.key.toLowerCase() === 'g' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const generateBtn = document.getElementById('generateBtn');
        if (generateBtn && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            generateBtn.click();
        }
    }
    
    // Press 'F' to go to favorites
    if (e.key.toLowerCase() === 'f' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const favoritesTab = document.querySelector('[data-tab="favorites"]');
        if (favoritesTab && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            favoritesTab.click();
        }
    }
});

// Add loading state to generate button
document.getElementById('generateBtn').addEventListener('click', function() {
    const originalText = this.innerHTML;
    this.innerHTML = '<span class="loading"></span> Generating...';
    this.disabled = true;
    
    setTimeout(() => {
        this.innerHTML = originalText;
        this.disabled = false;
    }, 500);
});
