package StoreProject.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import StoreProject.DTO.Category;

@Repository
public class CategoryDaoImpl implements CategoryDao
{
	@Autowired
	JdbcTemplate jdbc;


	public List<Category> getAllCategories() 
	{
		final String SELECT_ALL_CATEGORIES = "SELECT * FROM category";
        return jdbc.query(SELECT_ALL_CATEGORIES,new CategoryMapper());
	}

	public Category getCategoryById(int id) 
	{
		try 
		{
			final String SELECT_CATEGORY_BY_ID = "SELECT * FROM category WHERE id = ?";
			return jdbc.queryForObject(SELECT_CATEGORY_BY_ID, new CategoryMapper(), id);//returns room Object
		}
		catch(Exception e)
		{
			return null;
		}
	}

	public Category getCategoryForItem(int itemID) 
	{
		final String SELECT_CATEGORY_FOR_ITEM="SELECT c.* FROM category c,itemsincategory ic,item i WHERE c.id=ic.categoryID AND ic.itemID=i.id AND i.id=?";
		return jdbc.queryForObject(SELECT_CATEGORY_FOR_ITEM, new CategoryMapper(), itemID);
		
	}
	
	
	

}
