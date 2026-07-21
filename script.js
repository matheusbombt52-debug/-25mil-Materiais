function openUpsellModal(){
    document.getElementById('upsellModal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeUpsellModal(){
    document.getElementById('upsellModal').classList.remove('active');
    document.body.style.overflow = '';
  }
  function acceptUpsell(){
    window.location.href = 'https://ggcheckout.app/checkout/v5/7G8UHXhPXTVCxsXzZXW6';
  }
  function declineUpsell(){
    window.location.href = 'https://ggcheckout.app/checkout/v5/yECPBZ3uzxeZ1qZHxq5W';
  }
  // Fecha o modal clicando fora do card
  document.getElementById('upsellModal').addEventListener('click', function(e){
    if(e.target === this){ closeUpsellModal(); }
  });

  // Acordeão do FAQ
  function toggleFaq(questionEl){
    var item = questionEl.parentElement;
    var wasOpen = item.classList.contains('open');
    // fecha todos os outros itens
    document.querySelectorAll('.faq-item.open').forEach(function(el){
      el.classList.remove('open');
    });
    if(!wasOpen){ item.classList.add('open'); }
  }

  // Rola suavemente até a seção de planos
  function scrollToPlans(){
    var el = document.getElementById('planos');
    if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
  }