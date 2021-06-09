package StoreProject.DAO;

import java.util.List;

import StoreProject.DTO.Category;

public interface CategoryDao 
{
	List<Category> getAllCategories();
	Category getCategoryById(int id);
	
}
