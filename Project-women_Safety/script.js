document.addEventListener('DOMContentLoaded', ()=> {
        const sosBtn=document.getElementById('sos-btn');
        const statusMsg=document.getElementById('sos-status');

        sosBtn.addEventListener('click', ()=> {
                // Save original button content
                const originalText=sosBtn.innerHTML;

                // Update button state to "Processing"
                sosBtn.innerHTML='<i class="fas fa-spinner fa-spin"></i> PROCESSING...';
                sosBtn.style.pointerEvents='none';

                statusMsg.style.color='var(--text-main)';
                statusMsg.innerText='Acquiring precise location data...';

                // Simulate processing time
                setTimeout(()=> {
                        if ("geolocation" in navigator) {
                            navigator.geolocation.getCurrentPosition((position)=> {
                                    const lat=position.coords.latitude.toFixed(4);
                                    const lng=position.coords.longitude.toFixed(4);

                                    // Success UI state
                                    statusMsg.style.color='#10b981'; // Emerald green

                                    statusMsg.innerHTML=`<i class="fas fa-check-circle" ></i> Alert dispatched ! Location: $ {
                                        lat
                                    }

                                    , $ {
                                        lng
                                    }

                                    `;

                                    sosBtn.innerHTML='<i class="fas fa-check"></i> ALERT SENT';
                                    sosBtn.style.background='linear-gradient(135deg, #10b981, #059669)';
                                    sosBtn.style.boxShadow='0 10px 25px rgba(16, 185, 129, 0.4)';

                                    // Reset button after 5 seconds
                                    setTimeout(()=> resetBtn(originalText), 5000);
                                }

                                ,
                                (error)=> {
                                    // Error UI state (permission denied)
                                    statusMsg.style.color='var(--accent)';
                                    statusMsg.innerHTML='<i class="fas fa-exclamation-triangle"></i> Location access denied. Alert sent without coordinates.';

                                    sosBtn.innerHTML='<i class="fas fa-check"></i> ALERT SENT';

                                    // Reset button after 5 seconds
                                    setTimeout(()=> resetBtn(originalText), 5000);
                                });
                        }

                        else {
                            // Fallback UI state (geolocation not supported)
                            statusMsg.style.color='var(--accent)';
                            statusMsg.innerText='Alert sent! (Geolocation not supported)';

                            sosBtn.innerHTML='<i class="fas fa-check"></i> ALERT SENT';

                            // Reset button after 5 seconds
                            setTimeout(()=> resetBtn(originalText), 5000);
                        }
                    }

                    , 1200);
            });

        // Function to reset the button back to its original state
        function resetBtn(originalText) {
            sosBtn.innerHTML=originalText;
            sosBtn.style.background='';
            sosBtn.style.boxShadow='';
            sosBtn.style.pointerEvents='auto';
            statusMsg.innerText='';
        }
    });