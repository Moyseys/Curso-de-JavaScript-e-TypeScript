//singleton - GOF

export class DataBase {
  private static database: DataBase;
  private constructor(
    private host: string,
    private port: number,
    private password: string,
  ) {}

  public conect(): void {
    return console.log('this connection has been established');
  }

  static getInstance(host: string, port: number, password: string): DataBase {
    if (this.database) {
      console.log('Instace exist');
      console.log(this.database);
      return this.database;
    }
    console.log('Create instance');
    this.database = new DataBase(host, port, password);
    console.log(this.database);
    return this.database;
  }
}

const db1 = DataBase.getInstance('localhost', 3306, 'root');
db1.conect();

const db2 = DataBase.getInstance('111.243.4454', 3307, 'ssenha');
db2.conect();

console.log(db1 === db2);
