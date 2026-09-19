export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'#060608',color:'#e8e8ec',fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <div style={{maxWidth:900,textAlign:'center',padding:'40px 20px'}}>
        <h1 style={{fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:700,letterSpacing:'-0.04em',lineHeight:1,margin:0}}>jjrusselrebels<span style={{color:'#FF2D7B'}}>.co.za</span></h1>
        <p style={{fontSize:'1.2rem',color:'#9a9a9e',margin:'24px 0 0',lineHeight:1.6}}>This will be seen be the Home Of jjrusselrebels.co.za</p>
        <div style={{background:'#111114',border:'1px solid rgba(255,255,255,.12)',borderRadius:12,padding:'32px 40px',marginTop:40,maxWidth:500,marginLeft:'auto',marginRight:'auto'}}>
          <h3 style={{margin:'0 0 12px',color:'#e8e8ec'}}>Admin Panel</h3>
          <p style={{margin:'0 0 16px',color:'#9a9a9e',fontSize:'.9rem',lineHeight:1.6'}}>Upload pictures and descriptions of your dogs. AI-powered to make professional descriptions automatically.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center'}}>
            <span style={{background:'#FF2D7B',color:'#fff',padding:'8px 20px',borderRadius:20,fontSize:'.85rem',fontWeight:500'}}>Upload</span>
            <span style={{background:'rgba(255,255,255,.08)',color:'#e8e8ec',padding:'8px 20px',borderRadius:20,fontSize:'.85rem',fontWeight:500'}}>AI Generate</span>
          </div>
        </div>
        <p style={{marginTop:60,color:'#5c5c60',fontSize:'.85rem'}}>Built with Next.js &bull; Hosted on NotaServer</p>
      </div>
    </div>
  )
}
