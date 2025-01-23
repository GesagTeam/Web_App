import psycopg2

def get_connection():
    """
    Creates a connection to the Supabase database.
    """
    return psycopg2.connect(
        host="aws-0-ap-southeast-1.pooler.supabase.com",
        database="postgres",
        user="postgres.npicvzmvipiaknjoluir",
        password="GesagDataBase1!3#9(7&",
        port="6543"
    )
