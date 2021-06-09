package StoreProject.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import StoreProject.DTO.Category;
import StoreProject.DTO.Store;

public class CategoryMapper implements RowMapper<Category> 
{
	 public Category mapRow(ResultSet rs, int i) throws SQLException 
	 {
		 Category cat = new Category();
		 cat.setId(rs.getInt("id"));
		 cat.setName(rs.getString("name"));
		 cat.setDescription(rs.getString("description"));
		 return cat;
	 }
		 
	
    
}
