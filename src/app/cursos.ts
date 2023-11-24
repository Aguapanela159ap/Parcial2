export class cursos {
    private nombre: string;
    private plataforma: string;
    private lanzamiento: string;
    private certificado: boolean;
    private duracion: number;
    private descripcion: string;
    
  
    constructor(nombre: string, plataforma: string, descripcion: string, lanzamiento: string, 
        certificado: boolean, duracion: number) {
      this.nombre = nombre;
      this.plataforma = plataforma;
      this.descripcion = descripcion;
      this.lanzamiento = lanzamiento;
      this.certificado = certificado;
      this.duracion = duracion;
    }
  
    // Getters
    getNombre(): string { return this.nombre; }
    getDuracion(): number { return this.duracion; }
    getDescripcion(): string { return this.descripcion; }
    getPlataforma(): string { return this.plataforma; }
    getLanzamiento(): string { return this.lanzamiento; }
    getCertificado(): boolean { return this.certificado; }

  
    // Setters
    setNombre(nombre: string) { this.nombre = nombre; }
    setDuracion(duracion: number) { this.duracion = duracion; }
    setDescripcion(descripcion: string) { this.descripcion = descripcion; }
    setPlataforma(plataforma: string) { this.plataforma = plataforma; }
    setLanzamiento(lanzamiento: string) { this.lanzamiento = lanzamiento; }
    setCertificado(certificado: boolean) { this.certificado = certificado; }
 
  }