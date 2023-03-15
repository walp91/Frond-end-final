export interface Producto {
    id_producto:         number;
    descripcion:         string;
    id_marca:            number;
    id_talla:            number;
    color:               string;
    valor_unitario:      number;
    cantidad_disponible: number;
    id_categoria:        number;
    imagen:              string;
    mas_buscados:        number;
    marca:               Marca;
    talla:               Talla;
    categoria:           Categoria;
}

export interface Categoria {
    idCategoria: number;
    genero:      string;
}

export interface Marca {
    idMarca: number;
    marca:   string;
}

export interface Talla {
    idTalla: number;
    talla:   string;
}
