(function(){
  const q=new URLSearchParams(location.search),env=q.get('env')||(location.hostname.includes('localhost')?'dev':'prod'),schema={dev:'setupclub_dev',pre:'setupclub_pre',prod:'setupclub_prod'}[env]||'setupclub_dev',url='https://zbxqyxovirkujbctmfup.supabase.co',key='sb_publishable_rqi1FAOBsq04IRrTFRmWPg_6klBXIbq';
  async function paint(){try{const r=await fetch(url+'/rest/v1/club_state?id=eq.default',{headers:{apikey:key,Authorization:'Bearer '+key,'Accept-Profile':schema,'Content-Profile':schema}});const rows=await r.json(),sessions=rows[0]?.payload?.planner?.sessions||[];document.querySelectorAll('.planned-session').forEach((el,i)=>{const s=sessions[Number(el.closest('[data-edit-session]')?.dataset.editSession??i)]||sessions[i];if(!s)return;const duration=Number(s.duration||90);el.style.minHeight=Math.max(32,Math.round(duration*1.25))+'px';el.style.boxSizing='border-box';el.title=(s.warning?s.warning+' · ':'')+duration+' minutos';if(s.warning)el.classList.add('warn')})}catch{}}
  setTimeout(paint,400);setInterval(paint,2500);
})();

