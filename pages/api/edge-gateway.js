export const config = {
  runtime: "edge", // Essa rota será executada como Edge Function
};

export default async function handler(request) {
  // Recupera as variáveis definidas no ambiente
  const edgeSecretKey = process.env.EDGE_SECRET_KEY;
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!edgeSecretKey) {
    return new Response(
      JSON.stringify({ error: "Variável de ambiente EDGE_SECRET_KEY não configurada." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
  
  if (!databaseUrl) {
    return new Response(
      JSON.stringify({ error: "Variável de ambiente DATABASE_URL não configurada." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
  
  try {
    // Exemplo de chamada GET ao endpoint do seu banco de dados utilizando a secret key para autenticação.
    // Altere o método HTTP e os dados da requisição conforme a API que você utiliza.
    const dbResponse = await fetch(databaseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${edgeSecretKey}`,
      },
    });
    
    if (!dbResponse.ok) {
      throw new Error(`Erro na conexão com o banco de dados: ${dbResponse.statusText}`);
    }
    
    const dbData = await dbResponse.json();
    
    return new Response(
      JSON.stringify({
        message: "Conexão com o banco de dados realizada com sucesso!",
        data: dbData,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
} 