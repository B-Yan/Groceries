package StoreProject.DAO;

import java.util.List;

import StoreProject.DTO.Store;
import StoreProject.DTO.StoreHours;

public interface StoreDao 
{
	
	List<Store> getAllStores();
	Store getStoreById(int id);
	List<StoreHours> getHours();
	//delete add stores can be put here
	

}
