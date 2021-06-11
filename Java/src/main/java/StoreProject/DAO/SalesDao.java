package StoreProject.DAO;

import StoreProject.DTO.SaleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.PreparedStatementCreatorFactory;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class SalesDao {
    @Autowired
    JdbcTemplate jdbc;


    public Integer getNewId() {
        PreparedStatementCreatorFactory pscf = new PreparedStatementCreatorFactory("INSERT INTO sales(id) VALUES (NULL)");
        pscf.setReturnGeneratedKeys(true);
        KeyHolder kh = new GeneratedKeyHolder();
        jdbc.update(pscf.newPreparedStatementCreator(new ArrayList<Integer>()), kh);
        return kh.getKey().intValue();
    }

    public boolean treatSale(SaleDTO saleDto) {
        try {
            for (int[] value : saleDto.getValues()) {
                if (value[0] > 0 && value[1] > 0){
                    jdbc.update("INSERT INTO salesItem(sales_id, item_id, qte) VALUES(?,?,?)", saleDto.getId(), value[0], value[1]);
                }
            }
            return true;
        } catch (Exception e){
        }
        return false;
    }
}