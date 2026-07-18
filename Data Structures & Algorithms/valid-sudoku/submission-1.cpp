class Solution {
public:
    bool hasVectorDuplicate(vector<char>& myVec) {
        
        unordered_set<char> us1;

        for(int i = 0; i < myVec.size(); i++){
            
            if(myVec[i] == '.'){
                continue;
            }
            else{
                
                if(us1.find(myVec[i]) != us1.end()){
                    return true;
                }
                else{
                    us1.insert(myVec[i]);
                }
            }

        }
        return false;
    }
    
    vector<vector<char>> transpose(vector<vector<char>> &b){
        
        // manually initalizing the constructor with sizes and initial values
        // first param in a vector matrix is n-rows, and row values. Line below initializes-
        // b[0].size() rows of empty character vectors.
        // not necessary to initialize with known sizes and values in this case, you can do-
        // vector<vector<char>> trans_matrix;
        // 1D and 2D vector format - `vector<vector<char>> trans_matrix(b[0].size(), vector<char>());`
        vector<vector<char>> trans_matrix(b[0].size(), vector<char>()); 
    
        for (int i = 0; i < b.size(); i++)
        {
            for (int j = 0; j < b[i].size(); j++)
            {
                trans_matrix[j].push_back(b[i][j]);
            }
        }
        return trans_matrix; 
    }
    
    void validateVectors(vector<vector<char>>& board, bool& flag){
        for(int i = 0; i < board.size(); i++){
            if(hasVectorDuplicate(board[i])){
                flag = true;
                break;
            }
            else{
                flag = false;
            }
        }
    }
    
    vector<vector<char>> convertBoardByGrid(vector<vector<char>>& board){
        
        vector<vector<char>> converted_matrix; 
         
        int i = 0; //counter indices
        int j = 0;
        
        while(i < 9){
            while (j < 9){
                vector<char> temp; //temp vector for push_back
                temp = {board[i][j], board[i][j+1], board[i][j+2],
                        board[i+1][j], board[i+1][j+1], board[i+1][j+2],
                        board[i+2][j], board[i+2][j+1], board[i+2][j+2], };
                
                converted_matrix.push_back(temp); //push new vector to converted matrix
                j+=3;
            }
            i+=3;
        }
        
        return converted_matrix;
        
    }

    bool isValidSudoku(vector<vector<char>>& board) {
        
        bool hasDuplicateRow;
        bool hasDuplicateColumn;
        bool hasDuplicateGrid;
        vector<vector<char>> transposed_board = transpose(board); //transposes board and assigns to transposed_board
        vector<vector<char>> converted_board = convertBoardByGrid(board);
        //hasDuplicateRow checker
        validateVectors(board, hasDuplicateRow);
        
        //hasDuplicateColumn checker
        validateVectors(transposed_board, hasDuplicateColumn); 
        
        //hasDuplicateGrid checker
        validateVectors(converted_board, hasDuplicateGrid);
        
        if(hasDuplicateRow || hasDuplicateColumn || hasDuplicateGrid){
            return false;
        }
        else{
            return true;
        }
    }
};