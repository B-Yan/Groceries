package StoreProject.DAO;

import java.util.List;


import StoreProject.DTO.ItemFormatted;

public interface ItemDao 
{
	List<ItemFormatted> getItems();
	List<ItemFormatted> getItemsByCategory(Integer categoryID); //in controller categoryid will be passed
	List<ItemFormatted> getItemsOnSale();
}
