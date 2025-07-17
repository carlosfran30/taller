document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contact-btn');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'contact-modal';
            modal.innerHTML = `
                <div class="contact-modal-content">
                    <span class="close-modal">&times;</span>
                    <h2 class="runa">ENVIA TU MENSAJE</h2>
                    <p>Un cuervo de Odín llevará tu mensaje a nuestro taller</p>
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="contact-name">Tu Nombre</label>
                            <input type="text" id="contact-name" required placeholder="Ej: Ragnar Lothbrok">
                        </div>
                        <div class="form-group">
                            <label for="contact-phone">Grito de Batalla (Teléfono)</label>
                            <input type="tel" id="contact-phone" required placeholder="Ej: +593 99 999 9999">
                        </div>
                        <div class="form-group">
                            <label for="contact-address">Tu Reino (Dirección)</label>
                            <input type="text" id="contact-address" placeholder="Ej: Valhalla 123, Asgard">
                        </div>
                        <div class="form-group">
                            <label for="contact-bike">Tu Corcel de Acero</label>
                            <input type="text" id="contact-bike" required placeholder="Ej: Honda CB750 Café Racer">
                        </div>
                        <div class="form-group">
                            <label for="contact-message">Mensaje para los Dioses</label>
                            <textarea id="contact-message" rows="3" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">LIBERAR AL CUERVO</button>
                    </form>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            const form = modal.querySelector('#contact-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const contactData = {
                    name: document.getElementById('contact-name').value,
                    phone: document.getElementById('contact-phone').value,
                    address: document.getElementById('contact-address').value,
                    bike: document.getElementById('contact-bike').value,
                    message: document.getElementById('contact-message').value,
                    date: new Date().toISOString()
                };
                
                localStorage.setItem('ragnarokContact', JSON.stringify(contactData));
                
                alert('¡Tu mensaje ha sido enviado por los cuervos de Odín! Nos pondremos en contacto contigo pronto.');
                document.body.removeChild(modal);

            });
        });
    }
});