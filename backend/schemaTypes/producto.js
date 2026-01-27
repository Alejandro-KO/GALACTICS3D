export default{
    name: 'producto',
    title: 'Catalogo 3D',
    type: 'document',
    fields: [
        {
            name:'nombre',
            title: 'Nombre de la Pieza',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Link (Slug)',
            type: 'slug',
            options: {source: 'nombre'}
        },
        {
            name: 'precio',
            title: 'Precio (MXN)',
            type: 'number',    
        },
        {
            name: 'imagen',
            title: 'Foto del Modelo',
            type: 'image',
            options: {hospot: true}
        },
        {
            name: 'descripcion',
            title: 'Detalles (Material, Tamaño, etc)',
            type: 'text',
        },
        {
            name: 'disponible',
            title: '¿En Stock?',
            type: 'boolean',
            initialVlalue: true
        }
    ]
}