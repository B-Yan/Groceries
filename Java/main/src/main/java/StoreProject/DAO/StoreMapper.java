package StoreProject.DAO;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import StoreProject.DTO.Store;


public class StoreMapper implements RowMapper<Store> {

    @Override
    public Store mapRow(ResultSet rs, int i) throws SQLException 
    {
        Store store = new Store();
        store.setId(rs.getInt("id"));
        store.setName(rs.getString("name"));
        store.setHours(rs.getString("hours"));
        store.setAreOpen(rs.getBoolean("areOpen"));
        store.setAddress(rs.getString("address"));
        store.setPhoneNumber(rs.getString("phoneNumber"));
        store.setEmail(rs.getString("email"));
        
        
        return store;
    }
}