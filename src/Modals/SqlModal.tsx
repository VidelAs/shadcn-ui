const SqlModal = () => {
  return (
    <div className="items-center">
      <h1 className="text-center text-2xl font-bold  text-[#DA291C] mt-8 mb-8">
        SQL Server
      </h1>
      <div>
        <h3 className="text-center text-xl font-bold">DDL</h3>
        <p className="text-center text-lg mb-2 mx-3 text-[#DA291C] font-semibold">
          Create
        </p>
        <p className="text-center text-base  mx-3 text-white">
          This command creates an object within the database manager. It can be
          a database, table, index, stored procedure or view.
        </p>
        <p className="text-center text-lg  mx-3 text-[#DA291C] font-semibold">
          ALTER
        </p>
        <p className="text-center text-base mx-3 text-white">
          This command allows you to modify the structure of an object. You can
          add/remove fields to a table, modify the type of a field, add/remove
          indexes to a table, modify a trigger, etc.
        </p>
        <p className="text-center text-lg mb-2 mx-3 text-[#DA291C] font-semibold">
          DROP
        </p>
        <p className="text-center text-base mx-3 text-white">
          This command deletes an object from the database. It can be a table,
          view, index, trigger, function, procedure or any other object that the
          database engine supports. It can be combined with the ALTER statement.
        </p>
        <p className="text-center text-lg mx-3 text-[#DA291C] font-semibold">
        TRUNCATE
        </p>
        <p className="text-center text-base mx-3 text-white">
        This command truncates the entire contents of a table. The advantage over the DROP command is that if you want to delete the entire contents of the table, it is much faster, especially if the table is very large. The disadvantage is that TRUNCATE is only useful when you want to delete absolutely all records, because the WHERE clause is not allowed.
        </p>
      </div>
    </div>
  );
};

export default SqlModal;
