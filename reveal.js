window.revelar = ScrollReveal ({reset:true})

// TITULOS H2
revelar.reveal('.efeito-titulos' ,
{
    duration: 2000,
    distance: '90px'
}) 

// BOXS-ESPECIALIDADES
revelar.reveal('.efeito-especialidades1' ,
{
    duration: 2000,
    distance: '90px',
})

revelar.reveal('.efeito-especialidades2' ,
{
    duration: 2000,
    distance: '90px',
    delay: 400
})

revelar.reveal('.efeito-especialidades3' ,
{
    duration: 2000,
    distance: '90px',
    delay: 900
})

// SOBRE

revelar.reveal('.efeito-img-sobre' ,
{
    duration: 1000,
    distance: '90px',
    origin: 'left'
})

revelar.reveal('.efeito-txt-sobre' ,
{
    duration: 1000,
    distance: '90px',
    origin: 'right',
    delay: 500
})

// PORTFÓLIO

revelar.reveal('.efeito-img-port1' ,
{
    duration: 2000,
    distance: '90px',
    delay: 400,
    origin: 'bottom'
})

revelar.reveal('.efeito-img-port2' ,
{
    duration: 2000,
    distance: '90px',
    delay: 900,
    origin: 'bottom'
})

revelar.reveal('.efeito-img-port3' ,
{
    duration: 2000,
    distance: '90px',
    delay: 1400,
    origin: 'bottom'
})
