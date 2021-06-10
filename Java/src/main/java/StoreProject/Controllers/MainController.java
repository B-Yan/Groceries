package StoreProject.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import StoreProject.DAO.CategoryDao;
import StoreProject.DAO.ItemDao;
import StoreProject.DAO.StoreDao;
import StoreProject.DTO.Category;
import StoreProject.DTO.ItemFormatted;
import StoreProject.DTO.Store;
import StoreProject.DTO.StoreHours;

@CrossOrigin
@RestController
@RequestMapping("api")
public class MainController 
{
	@Autowired
	StoreDao storeDao;
	
	@Autowired
	ItemDao itemDao;
	
	@Autowired
	CategoryDao categoryDao;


	@GetMapping(value="items",produces="application/json")
	public List<ItemFormatted> getItems()
	{
		return itemDao.getItems();
	}

	@GetMapping(value="stores",produces="application/json")
	public List<Store> getAllStores()
	{
		return storeDao.getAllStores();
	}

	@GetMapping(value="storeHours",produces="application/json")
	public List<StoreHours> getHours() //returns only store id and store hours(no other info), in an easier to read json format
	{
		return storeDao.getHours();
	}

	@GetMapping(value="{category}",produces="application/json")
	public List<ItemFormatted> getItemsByCategory(@PathVariable("category") Integer categoryID)
	{
		return itemDao.getItemsByCategory(categoryID);
	}

	@GetMapping(value="sales",produces="application/json")
	public List<ItemFormatted> getItemsOnSale()
	{
		return itemDao.getItemsOnSale();
	}

	@GetMapping(value="categories",produces="application/json")
	public List<Category> getAllCategories()
	{
		return categoryDao.getAllCategories();
	}

	@GetMapping(value="itembyid/{itemID}",produces="application/json")
	public ItemFormatted getitemByID(@PathVariable("itemID")Integer id)
	{
		return itemDao.getItemByID(id);
	}

	@GetMapping(value="categoryofitem/{itemID}",produces="application/json")
	public Category getCategoryforItem(@PathVariable("itemID") Integer id)
	{
		return categoryDao.getCategoryForItem(id);
	}
}
