import client from "../database";

export type book ={
    id:Number;
    title:String;
    author:String;
    total_pages:Number;
    type:String;
    summer:String;
}

export class by_bookStore{

    async index(): Promise<book[]> {
        try {
          const conn = await client.connect()
          const sql = 'SELECT * FROM books'
    
          const result = await conn.query(sql)
    
          conn.release()
    
          return result.rows 
        } catch (err) {
          throw new Error(`Could not get books. Error: ${err}`)
        }
      }

    async show(id: number): Promise<book> {
        try {
        const sql = 'SELECT * FROM books WHERE id=($1)'
        
        const conn = await client.connect()
    
        const result = await conn.query(sql, [id])
    
        conn.release()
    
        return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find book ${id}. Error: ${err}`)
        }
      }

      async create(b: book): Promise<book> {
        try {
      const sql = 'INSERT INTO books (title, author, total_pages, summary) VALUES($1, $2, $3, $4) RETURNING *'
      
      const conn = await client.connect()
  
      const result = await conn
          .query(sql, [b.title, b.author, b.total_pages, b.summer])
  
      const book = result.rows[0]
  
      conn.release()
  
      return book
        } catch (err) {
            throw new Error(`Could not add new book. Error: ${err}`)
        }
    }
  
    async delete(id: number): Promise<book> {
        try {
      const sql = 'DELETE FROM books WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()
  
      const result = await conn.query(sql, [id])
  
      const book = result.rows[0]
  
      conn.release()
  
      return book
        } catch (err) {
            throw new Error(`Could not delete book ${id}. Error: ${err}`)
        }
    }

}