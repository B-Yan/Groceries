package StoreProject.DAO;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import StoreProject.DTO.Category;
import StoreProject.DTO.Item;

public class ItemMapper implements RowMapper<Item> 
{
	public Item mapRow(ResultSet rs, int i) throws SQLException 
	 {
		 Item item = new Item();
		 item.setId(rs.getInt("id"));
		 item.setName(rs.getString("name"));
		 item.setDescription(rs.getString("description"));
		 item.setPrice(rs.getDouble("price"));
		 item.setPercentageOFF(rs.getDouble("percentageOFF"));
		 item.setUrl(rs.getString("imageURL"));
		 return item;
	 }
		 
}
